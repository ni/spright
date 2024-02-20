using Microsoft.Playwright;
using Xunit;

namespace SprightBlazorArmstrong.Tests.Acceptance
{
    public class DemoTests : AcceptanceTestsBase
    {
        public DemoTests(PlaywrightFixture playwrightFixture, BlazorServerWebHostFixture blazorServerClassFixture)
            : base(playwrightFixture, blazorServerClassFixture)
        {
        }

        [Fact]
        public async Task Demo_SaysHelloAsync()
        {
            await using (var pageWrapper = await NewPageForRouteAsync("DemoSaysHello"))
            {
                var page = pageWrapper.Page;
                var demoElement = page.Locator("spright-demo", new PageLocatorOptions() { HasText = "Say Hello" });
                await demoElement.ClickAsync();
            }
        }
    }
}
