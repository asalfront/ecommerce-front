export interface LaravelResponse {
  message: string;
  errors?: Record<string, Array<string>>;
}
