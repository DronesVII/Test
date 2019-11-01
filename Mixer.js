const Mixer = require('@mixer/client-node');
    const ws = require('ws');

    let userInfo;

    const client = new Mixer.Client(new Mixer.DefaultRequestRunner());

    // With OAuth we don't need to log in. The OAuth Provider will attach
    // the required information to all of our requests after this call.
    client.use(new Mixer.OAuthProvider(client, {
        tokens: {
            access: 'Click here to get your Token!',
            expires: Date.now() + (365 * 24 * 60 * 60 * 1000)
        },
    }));
