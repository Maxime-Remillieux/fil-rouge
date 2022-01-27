<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220127090210 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE book DROP FOREIGN KEY FK_CBE5A331CE73868F');
        $this->addSql('DROP INDEX UNIQ_CBE5A331CE73868F ON book');
        $this->addSql('ALTER TABLE book DROP loan_id');
        $this->addSql('ALTER TABLE loan DROP create_at, DROP return_at');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE book ADD loan_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE book ADD CONSTRAINT FK_CBE5A331CE73868F FOREIGN KEY (loan_id) REFERENCES loan (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_CBE5A331CE73868F ON book (loan_id)');
        $this->addSql('ALTER TABLE loan ADD create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', ADD return_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }
}
