import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Text from '@tiptap/extension-text';

export function TipTap2() {
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
        ],
        content: `
      <h1>Titre Principal</h1>
      <p>Sélectionnez du texte pour afficher le menu contextuel.</p>
      
      <h2>Sous-titre</h2>
      <ul>
        <li>Premier élément de liste à puces</li>
        <li>Deuxième élément de liste à puces</li>
      </ul>
      
      <h3>Autre sous-titre</h3>
      <ol>
        <li>Premier élément de liste numérotée</li>
        <li>Deuxième élément de liste numérotée</li>
      </ol>
    `,
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="p-4 max-w-2xl mx-auto">
            {/* Menu contextuel qui apparaît lors de la sélection */}
            <BubbleMenu
                className="bg-white border rounded shadow-lg overflow-hidden"
                tippyOptions={{ duration: 100 }}
                editor={editor}
            >
                <div className="flex">
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className="px-2 py-1 hover:bg-gray-100"
                        title="Titre H1"
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className="px-2 py-1 hover:bg-gray-100"
                        title="Titre H2"
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className="px-2 py-1 hover:bg-gray-100"
                        title="Liste à puces"
                    >
                        •  Liste
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className="px-2 py-1 hover:bg-gray-100"
                        title="Liste numérotée"
                    >
                        1. Liste
                    </button>
                </div>
            </BubbleMenu>

            <div className="border rounded-lg p-4">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
