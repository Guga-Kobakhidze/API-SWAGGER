import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ReplaceUserImageWithDataMigration1747263000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'public.users',
      new TableColumn({
        name: 'data',
        type: 'jsonb',
        isNullable: true,
        default: "'{}'",
      }),
    );

    await queryRunner.query(`
      UPDATE "public"."users"
      SET "data" = jsonb_build_object('image', "image")
      WHERE "image" IS NOT NULL AND "image" <> ''
    `);

    await queryRunner.dropColumn('public.users', 'image');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'public.users',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.query(`
      UPDATE "public"."users"
      SET "image" = "data" ->> 'image'
      WHERE "data" ? 'image'
    `);

    await queryRunner.dropColumn('public.users', 'data');
  }
}
