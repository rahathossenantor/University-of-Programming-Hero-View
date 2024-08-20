import { ReactNode } from "react";
import { TItem } from "../types/types.global";

type TRoutes = {
    path: string;
    element: ReactNode;
};

const routesGenerator = (items: TItem[]) => {
    const routes: TRoutes[] = items.reduce((acc: TRoutes[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }

        if (item.children) {
            item.children.forEach(child => {
                acc.push({
                    path: child.path!,
                    element: child.element,
                });
            });
        }
        return acc;
    }, []);
    return routes;
};

export default routesGenerator;
