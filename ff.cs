public class DatabaseSettings
{
    public string UserId { get; set; }
    public string DataSource { get; set; }
    public string Password { get; set; }
    public string ControlDbUserId { get; set; }
    public string ControlDbDataSource { get; set; }
    public string ControlDbPassword { get; set; }
    public bool Pooling { get; set; }
    public int ConnectionLifetime { get; set; }
    public int ConnectionTimeout { get; set; }
    public int MinPoolSize { get; set; }
    public int MaxPoolSize { get; set; }
    public int IncrPoolSize { get; set; }
    public int DecrPoolSize { get; set; }
}
