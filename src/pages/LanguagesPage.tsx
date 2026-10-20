import { LanguageCard } from "../components/LanguageCard";
import { getLanguages } from "../api/languages";
import { useQuery } from '@tanstack/react-query';

export function LanguagesPage() {
    const { data, refetch, isLoading, isFetching } = useQuery({
        queryKey: ['languages'],
        queryFn: getLanguages,
    });

    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Languages list </h1>
            </div>
            < button
                type = "button"
                className = "counter"
                onClick = {() => refetch()}
            >
                Update languages list
            </button>
            <div className = 'languagesContainer' >
            {loading && <h1>Languages list loading...</h1>}
            {!loading && data?.data.map((lang) => <LanguageCard key={ lang.id } { ...lang } />) }
            </div>
        </div>
  );
}