import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";
import { Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Suspense>
                <Searchbar />
            </Suspense>
            {children}
        </div>
    );
}
