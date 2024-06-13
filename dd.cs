using Newtonsoft.Json;
using System.IO;

public class ConfigLoader
{
    public static DatabaseSettings LoadConfig(string filePath)
    {
        var json = File.ReadAllText(filePath);
        return JsonConvert.DeserializeObject<DatabaseSettings>(json);
    }
}
