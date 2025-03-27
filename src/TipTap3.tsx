import { useEditor, EditorContent } from '@tiptap/react';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Text from '@tiptap/extension-text';
import {Bold} from '@tiptap/extension-bold';
import {Italic} from '@tiptap/extension-italic';

export function TipTap3() {

    const editor = useEditor({

        extensions: [
            Document,
            Paragraph,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            BulletList,
            OrderedList,
            ListItem,
            Text,
            Underline,
            Bold,
            Italic
        ],
        content: '<p>Commencez à écrire ici...</p>',
    });

    const applyFormat = (formatType: unknown) => {
        if (!editor) return;

        switch(formatType) {
            case 'bold':
                editor.chain().focus().toggleBold().run();
                break;
            case 'italic':
                editor.chain().focus().toggleItalic().run();
                break;
            case 'underline':
                editor.chain().focus().toggleUnderline().run();
                break;
        }
    };

    if (!editor) {
        return null;
    }

    return (
        <div className="p-4 border-2 border-gray-300 rounded-lg">
            <div className="flex space-x-2 mb-2">
                <button
                    onClick={() => applyFormat('bold')}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                    Gras
                </button>
                <button
                    onClick={() => applyFormat('italic')}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                >
                    Italique
                </button>
                <button
                    onClick={() => applyFormat('underline')}
                    className="px-2 py-1 bg-purple-500 text-white rounded"
                >
                    Souligner
                </button>
                <button
                    onClick={() => applyFormat('highlight')}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                    Surligner
                </button>
            </div>

            <EditorContent
                editor={editor}
                className="border p-2 min-h-[100px] bg-white"
            />
        </div>
    );
}
