import {EditorContent, useEditor} from '@tiptap/react'
import {Paragraph} from '@tiptap/extension-paragraph';
import {Heading} from '@tiptap/extension-heading';
import {BulletList} from '@tiptap/extension-bullet-list';
import {ListItem} from '@tiptap/extension-list-item';
import {OrderedList} from '@tiptap/extension-ordered-list';
import {Text} from '@tiptap/extension-text'
import {Document} from '@tiptap/extension-document'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Heading,
            BulletList,
            OrderedList,
            ListItem,
            Text
        ],
        content:'<p>Hello World!</p>'
    })

    return (
        <div>
            <EditorContent editor={editor}></EditorContent>
        </div>
    )
}

export default Tiptap
