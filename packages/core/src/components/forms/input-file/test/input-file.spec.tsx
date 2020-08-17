import { newSpecPage } from '@stencil/core/testing';
import { InputFile } from './midwest-input-file';

describe('midwest-input-file', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputFile],
      html: `<midwest-input-file></midwest-input-file>`,
    });
    expect(page.root).toEqualHtml(`
     <midwest-input-file placeholder="Enter a value" size="default">
       <mock:shadow-root>
         <context-consumer></context-consumer>
         <div class="wrapper">
           <label>
             <div class="content">
               <div class="file-wrapper">
                 <div class="upload-card">
                   <section>
                     <input class="input" id="input" placeholder="Enter a value" tabindex="0" type="file">
                     <h4>
                       <ion-icon name="add-circle"/>
                       Enter a value
                     </h4>
                   </section>
                 </div>
               </div>
             </div>
             <midwest-validate size="default"></midwest-validate>
           </label>
         </div>
      </mock:shadow-root>
    </midwest-input-file>
    `);
  });
});
