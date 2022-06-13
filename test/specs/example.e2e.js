
describe('StreamApp Test', () => {

    it('Login into the application with credentials', async () => {
        await browser.url(`/index.html`);

        const userInput = await $('#user');
        await userInput.setValue('streamapp@bitmovin.com');

        const passwordInput = await $('#password');
        await passwordInput.setValue('pass');

        await browser.pause(2000)

        const login = await $('#login');
        login.click();
    });

    it('Should playback and pause content', async () => {

        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('player')

        const playButton = await browser.$('.bmpui-ui-playbacktogglebutton')
        await playButton.click()

        await browser.pause(5000)

        var isPlaying = await browser.execute((isPlaying) => {
        return player.isPlaying()
        })
        await expect(isPlaying).toBe(true)

        await browser.pause(3000)

        const pauseButton = await browser.$('.bmpui-ui-playbacktogglebutton')
        await pauseButton.click()

        await browser.pause(2000)

        isPlaying = await browser.execute((isPlaying) => {
        return player.isPlaying()
        })
        await expect(isPlaying).toBe(false)

        await browser.saveScreenshot('./screenshot.png')
    });
});
