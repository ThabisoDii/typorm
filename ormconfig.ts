import { AssignedKpiRating } from 'src/assigned-kpi-rating/entities/assigned-kpi-rating.entity';
import { Kpi } from 'src/kpi/entities/kpi.entity';
import { StaffMember } from 'src/staff-member/entities/staff-member.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'KPI_TRACKINGDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [StaffMember,Kpi,AssignedKpiRating,],
  synchronize: true,
};

export default config;