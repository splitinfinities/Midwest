import { newE2EPage } from '@stencil/core/testing';

describe('midwest-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/midwest-core.css" rel="stylesheet" />
        <midwest-image width="2792" height="1574" preload="./global/images/_images/google_cardboard_will@2x-76x43.jpg">
            <source srcset="./global/images/_images/google_cardboard_will@2x.jpg" media="(min-width:1023px) and (min-device-pixel-ratio: 2)" />
            <source srcset="./global/images/_images/google_cardboard_will@2x-1024x577.jpg" media="(min-width:1023px)" />
            <source srcset="./global/images/_images/google_cardboard_will@2x-1024x577.jpg" media="(max-width:640px) and (min-device-pixel-ratio: 2)" />
            <source srcset="./global/images/_images/google_cardboard_will@2x-640x361.jpg" media="(max-width:640px)" />
        </midwest-image>
    `);
    const element = await page.find('midwest-image');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});
