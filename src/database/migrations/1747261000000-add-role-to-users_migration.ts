import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRoleToUsersMigration1747261000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'public.users',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        isNullable: false,
        default: "'user'",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('public.users', 'role');
  }
}
