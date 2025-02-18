import React, { useEffect, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import axios from "axios"

const LocationIQ = ({ onChange }) => {
    const [options, setOptions] = useState([]);
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (!!searchTerm) {
            const delayDebounceFn = setTimeout(() => {
                fetchGeoLocations(searchTerm);
            }, 500); // Debounce API calls

            return () => clearTimeout(delayDebounceFn);
        }
        if (searchTerm.length === 0) {
            setOptions([]);
            // setValue("");
        }

    }, [searchTerm]);


    const fetchGeoLocations = async (searchTerm) => {

        try {
            const result = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&q=${searchTerm}`);
            setOptions(result.data);
        } catch (error) {
            console.log("Error fetching locations:", error);
        }
    }

    const handleSelect = (currentValue) => {
        setValue(currentValue === value ? "" : currentValue)
        setOpen(false);

        onChange(currentValue);

    }


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? options.find((option) => option.address.city?.toLowerCase() === value.toLowerCase())?.address.city || value
                        : "Select destination..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-100 p-0">
                <Command>
                    <CommandInput placeholder="Search destination..." onValueChange={setSearchTerm} />
                    <CommandList>
                        <CommandEmpty>No destination found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.osm_id}
                                    value={option.address.city}
                                    onSelect={(currentValue) => handleSelect(currentValue)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === option.address.city ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-semibold">{option.display_place}</div>
                                        <div className="text-xs text-gray-500">{option.display_address}</div>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default LocationIQ