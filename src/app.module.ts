import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Replace with your PostgreSQL username
      password: 'password', // Replace with your PostgreSQL password
      database: 'nest_crud', // Replace with your database name
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    UsersModule,
  ],
})
export class AppModule {}
