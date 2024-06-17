using Microsoft.EntityFrameworkCore;

public class DBContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Anuncio> Anuncios { get; set; }

    public DBContext(DbContextOptions<DBContext> options) : base(options) { }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=app.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>()
            .HasIndex(p => p.Email)
            .IsUnique();

        base.OnModelCreating(modelBuilder);
    }
}