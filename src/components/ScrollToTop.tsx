import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "./SmoothScroll";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        // Disable browser's default scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Jump to top instantly on route change — via Lenis when active so its
        // internal scroll state stays in sync, otherwise native scroll.
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}
