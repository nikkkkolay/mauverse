import { RichTextInput, RichTextInputToolbar, LevelSelect, FormatButtons, ListButtons, LinkButtons, ClearButtons } from 'ra-input-rich-text';
import styles from './MyRichTextInput.module.css';

export const MyRichTextInput = ({ ...props }) => (
    <RichTextInput
        toolbar={
            <RichTextInputToolbar>
                <LevelSelect />
                <FormatButtons />
                <ListButtons />
                <LinkButtons />
                <ClearButtons />
            </RichTextInputToolbar>
        }
        label="Текст новости"
        source="body"
        className={styles.richInput}
        {...props}
    />
);
