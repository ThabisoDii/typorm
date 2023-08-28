import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1693252300314 implements MigrationInterface {
    name = 'NewMigrations1693252300314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "kpi" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3d17a255714085f2319f17869ad" UNIQUE ("description"), CONSTRAINT "PK_56589835e31cc0331684d2d28a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff_member" ("id" SERIAL NOT NULL, "idNumber" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "employeeNumber" character varying NOT NULL, CONSTRAINT "UQ_e2f9704591e66987e2a0f860b8b" UNIQUE ("idNumber"), CONSTRAINT "UQ_d76602e7c52927f722393de6498" UNIQUE ("employeeNumber"), CONSTRAINT "PK_342343208cbc30b3c14a976b0a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assigned_kpi_rating" ("id" SERIAL NOT NULL, "month" character varying NOT NULL, "target" integer NOT NULL, "score" integer NOT NULL, "weight" integer NOT NULL, "comments" character varying NOT NULL, "staffMemberId" integer NOT NULL, "kpiId" integer NOT NULL, CONSTRAINT "PK_0992e4c500aba72914b5fcf08b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "assigned_kpi_rating" ADD CONSTRAINT "FK_bbc239cb35f46d038e25b0decbd" FOREIGN KEY ("staffMemberId") REFERENCES "staff_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assigned_kpi_rating" ADD CONSTRAINT "FK_813d46b13898a42ba0685aec689" FOREIGN KEY ("kpiId") REFERENCES "kpi"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assigned_kpi_rating" DROP CONSTRAINT "FK_813d46b13898a42ba0685aec689"`);
        await queryRunner.query(`ALTER TABLE "assigned_kpi_rating" DROP CONSTRAINT "FK_bbc239cb35f46d038e25b0decbd"`);
        await queryRunner.query(`DROP TABLE "assigned_kpi_rating"`);
        await queryRunner.query(`DROP TABLE "staff_member"`);
        await queryRunner.query(`DROP TABLE "kpi"`);
    }

}
