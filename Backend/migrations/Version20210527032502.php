<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210527032502 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE favorite_character (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, height VARCHAR(255) NOT NULL, mass VARCHAR(255) NOT NULL, hair_color VARCHAR(255) NOT NULL, skin_color VARCHAR(255) NOT NULL, eye_color VARCHAR(255) NOT NULL, birth_year VARCHAR(255) NOT NULL, gender VARCHAR(255) NOT NULL, homeworld VARCHAR(255) NOT NULL, films VARCHAR(255) NOT NULL, species VARCHAR(255) NOT NULL, vehicles VARCHAR(255) NOT NULL, starships VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE favorite_character');
    }
}
