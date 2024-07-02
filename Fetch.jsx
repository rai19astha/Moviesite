using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace ThorPriceWebAPI.App_Start
{
    public class CorsMessageHandler : DelegatingHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Headers.Contains("Origin"))
            {
                var response = base.SendAsync(request, cancellationToken);

                response.Result.Headers.Add("Access-Control-Allow-Origin", "*");
                response.Result.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                response.Result.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

                if (request.Method == HttpMethod.Options)
                {
                    return Task.FromResult(new HttpResponseMessage(HttpStatusCode.OK)
                    {
                        Headers = {
                            { "Access-Control-Allow-Origin", "*" },
                            { "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" },
                            { "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS" }
                        }
                    });
                }

                return response;
            }

            return base.SendAsync(request, cancellationToken);
        }
    }
}
