import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 12;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2">
		<h1>{SITENAME}</h1><h2>Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru</h2>
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}
<p>{SITENAME} Video bokep indo terbaru viral bocil jilbab smp indonesia mama sma hijab abg jepang jav barat simontok colmek film tante twitter asia hot download live stw situs nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
<p>{SITENAME} Video Bokep indo jepang indonesia barat viral bokep video terbaru bocil bokepindo korea jilbab smp japan ama sub sma jav cina japanese anime hijab abg colmek film tante twitter asia china rusia no sensor hot arab india download live stw thailand situs hd nonton link baru mom montok telegram perawan sd anak kecil crot bokepindoh selingkuh cantik ojol lokal vidio gay asian anime amerika hentail artis streaming pelajar janda hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja bokepindonesia wiki raja bokeptube full porno bokepmama simontok bokepind playbokep indobokep xpanasonline indoh</p>
        </div>
    );
}
