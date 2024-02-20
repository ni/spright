using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace SprightBlazorArmstrong;

public partial class SprightDemo : ComponentBase
{
    private ElementReference _demoElement;

    internal static string SayHelloMethodName = "SprightBlazorArmstrong.Demo.sayHello";

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    [Inject]
    private IJSRuntime? JSRuntime { get; set; }

    public async Task SayHelloAsync()
    {
        await JSRuntime!.InvokeVoidAsync(SayHelloMethodName, _demoElement);
    }
}
