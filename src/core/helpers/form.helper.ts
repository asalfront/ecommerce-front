import { cloneDeep as _cloneDeep, mapKeys as _mapKeys, unset as _unset, isEqual as _isEqual } from 'lodash';

export class FormHelper {

	static cleanDataToBeSaved<T>(payload: T, original: T): T {
		const newPayload = _cloneDeep(payload) as unknown as Record<string, unknown>;
		_mapKeys(newPayload, (value, key) => {
			if (_isEqual(original[key as keyof T], value)){
				_unset(newPayload, key);
			}
		});
		return newPayload as T;
	}

	static isEmpty<T>(data: T): boolean {
		return Object.keys(data as unknown as Record<string, unknown>).length === 0;
	}
}
