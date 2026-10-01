import { type Language } from '../api/languages';

export function LanguageCard(language: Language) {
    return (
        <div key= { language.id } className = 'languageCard' >
            <div><strong>{ language.id }.< /strong> {language.title}</div >
        </div>
  );
}