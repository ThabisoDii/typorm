import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions:DataSourceOptions = {

    type : "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database:"KPI_TRACKINGDB",
    entities: ['dist/**/*.entity.js'],
    migrations:['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

//yarn migration:generate db/migrations/newMigrations
//yarn typeorm:migrate ==> run migrations
//yarn typeorm:revert ==> revert migrations

/*
    After making changes to a table,generate migration and run it.if it wrong or breaks stuff reverse it
    using commands stored in package.json

*/