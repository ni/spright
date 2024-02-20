using System;
using System.Linq.Expressions;
using Bunit;
using Xunit;

namespace SprightBlazorArmstrong.Tests.Unit.Components;

/// <summary>
/// Tests for <see cref="SprightDemo"/>.
/// </summary>
public class SprightDemoTests
{
    [Fact]
    public void SprightDemo_Render_HasCorrectMarkup()
    {
        var context = new TestContext();
        context.JSInterop.Mode = JSRuntimeMode.Loose;
        var expectedMarkup = "spright-demo";

        var component = context.RenderComponent<SprightDemo>();

        Assert.Contains(expectedMarkup, component.Markup);
    }

    [Fact]
    public void SprightDemo_SupportsAdditionalAttributes()
    {
        var context = new TestContext();
        context.JSInterop.Mode = JSRuntimeMode.Loose;
        var exception = Record.Exception(() => context.RenderComponent<SprightDemo>(ComponentParameter.CreateParameter("class", "foo")));
        Assert.Null(exception);
    }
}
