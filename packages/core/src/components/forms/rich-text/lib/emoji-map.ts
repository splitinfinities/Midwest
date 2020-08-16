const { ShortNameEmoji } = QuillEmoji;
import QuillEmoji from 'quill-emoji';
const EmojiMap = {};

ShortNameEmoji.DEFAULTS.emojiList.forEach((emojiListObject: any) => {
    // @ts-ignore
    EmojiMap[emojiListObject.name] = emojiListObject;
});

export { EmojiMap };
