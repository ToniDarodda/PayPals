import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameMe1712220304749 implements MigrationInterface {
    name = 'RenameMe1712220304749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tri" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "version" integer NOT NULL DEFAULT '0', "name" character varying NOT NULL, "share_code" character varying NOT NULL, "owner_id" uuid, CONSTRAINT "REL_1ce479625109265606a4c9ee13" UNIQUE ("owner_id"), CONSTRAINT "PK_c2c9e1040e9c97b127c201da8df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tri" ADD CONSTRAINT "FK_1ce479625109265606a4c9ee13d" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tri" DROP CONSTRAINT "FK_1ce479625109265606a4c9ee13d"`);
        await queryRunner.query(`DROP TABLE "tri"`);
    }

}
