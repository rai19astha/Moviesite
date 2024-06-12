using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Oracle.ManagedDataAccess.Client;

[Route("api/[controller]")]
[ApiController]
public class DataController : ControllerBase
{
    private readonly string _connectionString = "Your Connection String Here";

    [HttpGet("identifiers")]
    public IActionResult GetIdentifiers()
    {
        var identifiers = new List<string>();

        using (var conn = new OracleConnection(_connectionString))
        {
            var cmd = new OracleCommand
            {
                Connection = conn,
                CommandType = CommandType.Text,
                CommandText = "SELECT DISTINCT Longname FROM external_db"
            };

            conn.Open();

            using (var reader = cmd.ExecuteReader())
            {
                while (reader.Read())
                {
                    identifiers.Add(reader.GetString(0));
                }
            }
        }

        return Ok(identifiers);
    }
}
