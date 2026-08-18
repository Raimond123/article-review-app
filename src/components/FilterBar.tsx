import type { FilterCriteria } from "../types";

interface FilterBarProps{
    filters: FilterCriteria;
    setFilters: React.Dispatch<React.SetStateAction<FilterCriteria>>;
    availableSections: string[];
    availableStatuses: string[];
}

export function FilterBar({
    filters,
    setFilters,
    availableSections,
    availableStatuses
}: FilterBarProps){
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    return(
        <div className="filter-bar">
            <input
                type="text"
                name="search"
                placeholder="Search by title or author..."
                value={filters.search}
                onChange={handleChange}
                className="filter-input"
            />

            <select name="section" value={filters.section} onChange={handleChange} className="filter-select">
                <option value="">All Sections</option>
                {availableSections.map(section => (
                    <option key={section} value={section}>{section}</option>
                ))}
            </select>

            <select name="status" value={filters.status} onChange={handleChange} className="filter-select">
                <option value="">All Statuses</option>
                {availableStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                ))}
            </select>

            <select name="sortBy" value={filters.sortBy} onChange={handleChange} className="filter-select">
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
            </select>
        </div>
    );
}