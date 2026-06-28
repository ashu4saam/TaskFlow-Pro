import {
    LayoutDashboard,
    CheckSquare,
    BarChart3,
    CalendarDays,
    Settings
} from "lucide-react";

function Sidebar(){

    return(

        <aside className="w-72 bg-slate-900 text-white min-h-screen p-8">

            <nav className="space-y-4 mt-8">

                <SidebarItem
                    icon={<LayoutDashboard size={20}/>}
                    title="Dashboard"
                />

                <SidebarItem
                    icon={<CheckSquare size={20}/>}
                    title="Tasks"
                />

                <SidebarItem
                    icon={<BarChart3 size={20}/>}
                    title="Analytics"
                />

                <SidebarItem
                    icon={<CalendarDays size={20}/>}
                    title="Calendar"
                />

                <SidebarItem
                    icon={<Settings size={20}/>}
                    title="Settings"
                />

            </nav>

        </aside>

    );

}

function SidebarItem({icon,title}){

    return(

        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-600 cursor-pointer transition-all">

            {icon}

            <span>{title}</span>

        </div>

    )

}

export default Sidebar;