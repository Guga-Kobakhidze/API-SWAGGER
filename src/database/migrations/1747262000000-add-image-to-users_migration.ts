import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddImageToUsersMigration1747262000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'public.users',
      new TableColumn({
        name: 'image',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('public.users', 'image');
  }
}
