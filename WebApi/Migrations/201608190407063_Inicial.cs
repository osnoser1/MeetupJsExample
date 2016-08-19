namespace WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Inicial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Autors",
                c => new
                    {
                        IdAutor = c.Int(nullable: false, identity: true),
                        Nombre = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.IdAutor);
            
            CreateTable(
                "dbo.Libroes",
                c => new
                    {
                        IdLibro = c.Int(nullable: false, identity: true),
                        Titulo = c.String(),
                        Año = c.Int(nullable: false),
                        Precio = c.Double(nullable: false),
                        Genero = c.String(),
                        IdAutor = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdLibro)
                .ForeignKey("dbo.Autors", t => t.IdAutor, cascadeDelete: true)
                .Index(t => t.IdAutor);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Libroes", "IdAutor", "dbo.Autors");
            DropIndex("dbo.Libroes", new[] { "IdAutor" });
            DropTable("dbo.Libroes");
            DropTable("dbo.Autors");
        }
    }
}
