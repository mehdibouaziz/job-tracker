import {Outlet, createRootRoute} from '@tanstack/react-router'
import {ThemeProvider} from "@/components/theme-provider/theme-provider.tsx";
import {TooltipProvider} from "@/components/ui/tooltip";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/sidebar/app-sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <TooltipProvider>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex h-5 items-center gap-3 text-sm">
                                <SidebarTrigger className="ml-2" />
                                <Separator orientation="vertical" />
                                <span className="text-sm">JobTracker</span>
                            </div>
                        </header>

                        <Outlet/>
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </ThemeProvider>
    )
}
