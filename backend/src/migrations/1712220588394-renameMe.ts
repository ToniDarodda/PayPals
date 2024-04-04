import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameMe1712220588394 implements MigrationInterface {
    name = 'RenameMe1712220588394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tri" ALTER COLUMN "share_code" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tri" ALTER COLUMN "share_code" SET NOT NULL`);
    }

}
