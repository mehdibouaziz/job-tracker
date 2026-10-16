import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/theme-provider/mode-toggle.tsx";
import {Link} from "@tanstack/react-router";
import {
    ChartNoAxesCombined,
    Info,
    LayoutDashboard,
    Lighthouse,
    NotebookTabs,
    SquareChartGantt,
} from "lucide-react";


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link to={'/'}>
                            <SidebarMenuButton size="lg"
                                               className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Lighthouse/>
                                </div>
                                <span className="text-xl">JobBoard V1.0</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>

                <SidebarGroup>
                    <SidebarGroupLabel>Applications</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link to={'/'}>
                                    <SidebarMenuButton tooltip={"All Jobs"}>
                                        <SquareChartGantt />
                                        <span>All Jobs</span>
                                    </SidebarMenuButton>
                                </Link>
                                <Link to={'/'}>
                                    <SidebarMenuButton>
                                        <LayoutDashboard />
                                        <span>Kanban</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Resources</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link to={'/'}>
                                    <SidebarMenuButton>
                                        <NotebookTabs/>
                                        <span>Job Boards</span>
                                    </SidebarMenuButton>
                                </Link>
                                <Link to={'/stats'}>
                                    <SidebarMenuButton>
                                        <ChartNoAxesCombined/>
                                        <span>Stats</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter>
                <Link to={'/about'}>
                    <SidebarMenuButton>

                        <Info/>
                        <span>About</span>

                    </SidebarMenuButton>
                </Link>
                <ModeToggle/>
            </SidebarFooter>
        </Sidebar>
    )
}