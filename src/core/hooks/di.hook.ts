import { Container } from 'inversify';

import { AuthDataSource } from '@/features/auth/data/datasources/auth.datasource';
import { AuthRepositoryImpl } from '@/features/auth/data/repositories/auth.repository-impl';
import { AuthRepository } from '@/features/auth/domain/repositories/auth.repository';

import TYPES from './di/di.types';
import { CategoryDataSource } from '@/features/categories/data/datasources';
import { CategoryRepositoryImpl } from '@/features/categories/data/repositories';
import { CategoryRepository } from '@/features/categories/domain/repositories';
import { ProfileDataSource } from '@/features/profile/data/datasources';
import { ProfileRepository } from '@/features/profile/domain/repositories';
import { ProfileRepositoryImpl } from '@/features/profile/data/repositories';
import { CustomerDataSource } from '@/features/customers/data/datasources';
import { CustomerRepository } from '@/features/customers/domain/repositories';
import { CustomerRepositoryImpl } from '@/features/customers/data/repositories';
import { ProductDataSource } from '@/features/products/data/datasources';
import { ProductRepository } from '@/features/products/domain/repositories';
import { ProductRepositoryImpl } from '@/features/products/data/repositories';
import { UserDataSource } from '@/features/users/data/datasources';
import { UserRepository } from '@/features/users/domain/repositories';
import { UserRepositoryImpl } from '@/features/users/data/repositories';
import { OrderDataSource } from '@/features/orders/data/datasources';
import { OrderRepository } from '@/features/orders/domain/repositories';
import { OrderRepositoryImpl } from '@/features/orders/data/repositories';

const container = new Container();

// Auth
container.bind<AuthDataSource>(TYPES.AuthDataSource).toConstantValue(new AuthDataSource());
container.bind<AuthRepository>(TYPES.AuthRepository).to(AuthRepositoryImpl).inSingletonScope();

// Categories
container.bind<CategoryDataSource>(TYPES.CategoryDataSource).toConstantValue(new CategoryDataSource());
container.bind<CategoryRepository>(TYPES.CategoryRepository).to(CategoryRepositoryImpl).inSingletonScope();

// Profile
container.bind<ProfileDataSource>(TYPES.ProfileDataSource).toConstantValue(new ProfileDataSource());
container.bind<ProfileRepository>(TYPES.ProfileRepository).to(ProfileRepositoryImpl).inSingletonScope();

// Customers
container.bind<CustomerDataSource>(TYPES.CustomerDataSource).toConstantValue(new CustomerDataSource());
container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepositoryImpl).inSingletonScope();

// Products
container.bind<ProductDataSource>(TYPES.ProductDataSource).toConstantValue(new ProductDataSource());
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl).inSingletonScope();

// Users
container.bind<UserDataSource>(TYPES.UserDataSource).toConstantValue(new UserDataSource());
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepositoryImpl).inSingletonScope();

// Orders
container.bind<OrderDataSource>(TYPES.OrderDataSource).toConstantValue(new OrderDataSource());
container.bind<OrderRepository>(TYPES.OrderRepository).to(OrderRepositoryImpl).inSingletonScope();

export const di = () => {
	return container;
};
