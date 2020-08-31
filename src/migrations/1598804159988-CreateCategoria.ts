import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoria1598804159988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"categorias",
            columns: [
                {
                    name: 'id', 
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"

                },
                {
                    name: 'name',
                    type: 'varchar'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categorias')
    }

}
