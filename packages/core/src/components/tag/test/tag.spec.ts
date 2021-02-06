import { Tag } from '../tag';
import { newSpecPage } from '@stencil/core/testing';

describe('midwest-tag', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
          components: [Tag],
          html: `<midwest-tag>NICE</midwest-tag>`,
        });
    
        expect(page.root).toEqualHtml(`<midwest-tag class="theme-undefined" color="blue" text-color="white" style=\"--background-color: var(--blue-5); --color: var(--white);\">
            <mock:shadow-root>
            <context-consumer></context-consumer>
            <midwest-label class=\"tag\">
                <slot></slot>
            </midwest-label>
            </mock:shadow-root>
            NICE
        </midwest-tag>`);
    });
});
