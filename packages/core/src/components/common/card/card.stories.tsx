import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('UI|Card', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
    knobs: {
      escapeHTML: false,
    }
  })

  .add('Default', () => {
    return `<midwest-card flippable="${boolean("Flippable", false)}" flip-icon="${text("Flip Icon", "md-create")}">
        <h1>${text("Front text", "Hello there!!")}</h1>
        <h1 slot="back">${text("Back text", "Hello there!!")}</h1>
      </midwest-card>
    `;
  })

  .add('Default', () => {
    return `<midwest-card horizontal="${boolean("horizontal", false)}" flippable="${boolean("Flippable", false)}" flip-icon="${text("Flip Icon", "md-create")}" class="max-w-xl m-auto">
    <header class="bg-gray-1 p-0">
      <img src="https://source.unsplash.com/random/300x300" class="w-full h-full" />
    </header>
    <section>
      ${text("Front text", `<h6 class="text-red-5">Context</h6>
      <h1>Nice Stuff</h1>
      <p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad saepe quia quos voluptatem voluptatibus error quo enim a, nihil accusantium fugiat sapiente corrupti deserunt exercitationem suscipit. Quis temporibus accusantium molestias.</p>`)}
    </section>
    <footer class="bg-gray-1">
      ${text("Footer text", `<h6 class="text-red-5">Context</h6><p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>`)}
    </footer>
    <header slot="back" class="bg-gray-1">
      <h6>back header</h6>
    </header>
    <section slot="back">
      ${text("Back text", `<h6 class="text-red-5">Context</h6>
      <h1>Nice Stuff</h1>
      <p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad saepe quia quos voluptatem voluptatibus error quo enim a, nihil accusantium fugiat sapiente corrupti deserunt exercitationem suscipit. Quis temporibus accusantium molestias.</p>`)}
    </section>
    <footer slot="back" class="bg-gray-1">
      ${text("Back Footer text", `<h6 class="text-red-5">Context</h6><p class="text-gray-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>`)}
    </footer>
  </midwest-card>
    `;
  })

  .add('Headers & Footers', () => {
    return `<midwest-card flippable="${boolean("Flippable", false)}" flip-icon="${text("Flip Icon", "md-create")}">
        <header>
          <h6>${text("Front Header", "Header")}</h6>
        </header>
        <section>
          <h6>${text("Front Body", "Body")}</h6>
        </section>
        <footer>
          <h6>${text("Front Footer", "Footer")}</h6>
        </footer>
        <header slot="back">
          <h6>${text("Back Header", "Back Header")}</h6>
        </header>
        <section slot="back">
          <h6>${text("Back Body", "Back Body")}</h6>
        </section>
        <footer slot="back">
          <h6>${text("Back Footer", "Back Footer")}</h6>
        </footer>
      </midwest-card>
    `;
  });