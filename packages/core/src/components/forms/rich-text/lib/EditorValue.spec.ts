import { EditorValue } from './EditorValue';

describe('EditorValue', () => {
  it('can_apply_mentions', () => {
    const text = "TEST ADAM TEST";
    const mentions:  any[] = [{
        id: 1,
        startPosition: 5,
        endPosition: 9,
        value: "ADAM",
        length: 4 
    }];

    // @ts-ignore
    const editorValue = EditorValue.apply_mentions(text, mentions);

    expect(editorValue.mentions.length).toBe(1);
    expect(editorValue.mentions[0].startPosition).toBe(5);
    expect(editorValue.mentions[0].endPosition).toBe(9);
    expect(editorValue.mentions[0].value).toBe("ADAM");
  });

  it('can_apply_empty_mentions', () => {
    const text = "TEST ADAM TEST";
    const mentions:  any[] = [];

    // @ts-ignore
    const editorValue = EditorValue.apply_mentions(text, mentions);

    expect(editorValue.mentions.length).toBe(0);
    expect(editorValue.message).toBe(text);
  });
});
