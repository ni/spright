/* eslint-disable func-names */
/* eslint-disable no-undef */

/**
 * Register the custom event types used by Spright Armstrong components.
 *
 * JavaScript initializer for SprightBlazorArmstrong project, see
 * https://docs.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-6.0#javascript-initializers
 */

export function afterStarted(Blazor) {
    if (window.SprightBlazorArmstrong.calledAfterStarted) {
        console.warn('Attempted to initialize Spright Blazor Armstrong multiple times!'); // eslint-disable-line
        return;
    }

    if (!Blazor) {
        throw new Error('Blazor not ready to initialize Spright!');
    }

    window.SprightBlazorArmstrong.calledAfterStarted = true;

    /* Register any custom events here
    Blazor.registerCustomEventType('sprighteventname', {
        browserEventName: 'foo',
        createEventArgs: event => {
            return {
                newState: event.detail.newState,
                oldState: event.detail.oldState
            };
        }
    });
    */
}

if (window.SprightBlazorArmstrong) {
    console.warn('Attempting to initialize SprightBlazorArmstrong multiple times!'); // eslint-disable-line
}

window.SprightBlazorArmstrong = window.SprightBlazorArmstrong ?? {
    calledAfterStarted: false,
    Demo: {
        sayHello: function (demoReference) {
            demoReference.sayHello();
        }
    }
};
