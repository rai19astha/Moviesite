// Example ApiController.cs

using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Data.OracleClient; // Ensure you have the correct Oracle client namespace

public class ApiController : System.Web.Http.ApiController
{
    // GET api/identifierTypes
    [HttpGet]
    [Route("api/identifierTypes")]
    public IHttpActionResult GetIdentifierTypes()
    {
        List<string> identifierTypes = new List<string>();
        identifierTypes.Add("Select an Identifier type"); // Default Item

        try
        {
            DatabaseConfiguration databaseConfiguration = new DatabaseConfiguration();
            using (OracleConnection conn = new OracleConnection(databaseConfiguration.ControlDbConnectic))
            {
                conn.Open();
                string sql = "select DISTINCT Longname from external_db";
                using (OracleCommand cmd = new OracleCommand(sql, conn))
                {
                    using (OracleDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            string identifierTypeValue = reader.GetString(0);
                            identifierTypes.Add(identifierTypeValue);
                        }
                    }
                }
            }
            return Ok(identifierTypes);
        }
        catch (Exception ex)
        {
            return InternalServerError(ex);
        }
    }

    // GET api/dataSources/{security}/{identifierType}
    [HttpGet]
    [Route("api/dataSources/{security}/{identifierType}")]
    public IHttpActionResult GetDataSourcesForSecurity(string security, string identifierType)
    {
        try
        {
            List<string> dataSources = TreeDetails.GetDataSourcesForSecurity(security, identifierType);
            return Ok(dataSources);
        }
        catch (Exception ex)
        {
            return InternalServerError(ex);
        }
    }

    // POST api/timeSeriesData
    [HttpPost]
    [Route("api/timeSeriesData")]
    public IHttpActionResult GetTimeSeriesData(TimeSeriesRequest request)
    {
        try
        {
            List<DataTable> dataTableList = new List<DataTable>();
            foreach (string dataSource in request.DataSources)
            {
                DataTable dt = TreeDetails.GetTimeSeriesData(dataSource, request.Security, request.IdentifierType, request.StartDate, request.EndDate, request.IsRecentPriceChecked);
                dataTableList.Add(dt);
            }
            return Ok(dataTableList);
        }
        catch (Exception ex)
        {
            return InternalServerError(ex);
        }
    }
}

public class TimeSeriesRequest
{
    public string Security { get; set; }
    public string IdentifierType { get; set; }
    public List<string> DataSources { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public bool IsRecentPriceChecked { get; set; }
}
