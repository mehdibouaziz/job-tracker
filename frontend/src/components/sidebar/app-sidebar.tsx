import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import {ModeToggle} from "@/components/theme-provider/mode-toggle.tsx";
import {Link} from "@tanstack/react-router";
import {
    ChartNoAxesCombined,
    Info,
    LayoutDashboard,
    Lighthouse,
    NotebookTabs,
    SquareChartGantt,
    Plus,
} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";


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
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Applications</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className="flex items-center justify-between gap-2">
                                <Link to={'/'} className="grow">
                                    <SidebarMenuButton tooltip={"All Jobs"}>
                                        <SquareChartGantt/>
                                        <span>All Jobs</span>
                                    </SidebarMenuButton>
                                </Link>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button
                                            size="icon"
                                            className="size-6 group-data-[collapsible=icon]:opacity-0"
                                            variant="outline"
                                        >
                                            <Plus/>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side={"right"}>
                                        <p>Add job listing</p>
                                    </TooltipContent>
                                </Tooltip>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <Link to={'/kanban'}>
                                    <SidebarMenuButton>
                                        <LayoutDashboard/>
                                        <span>Kanban</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Resources</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link to={'/boards'}>
                                    <SidebarMenuButton>
                                        <NotebookTabs/>
                                        <span>Job Boards</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
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
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center justify-between gap-2">
                        <Link to={'/about'} className="grow">
                            <SidebarMenuButton>
                                <Info/>
                                <span>About</span>
                            </SidebarMenuButton>
                        </Link>
                        <ModeToggle/>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}