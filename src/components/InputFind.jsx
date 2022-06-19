import { incrementPoint, historyCreate } from './../redux/action'

import {useDispatch } from 'react-redux'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

 const InputFind = () => {

    const dispatch = useDispatch();

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
  
        const results = await getGeocode ({address});
        const {lat, lng} = getLatLng(results[0]);
        const {formatted_address} = results[0];
        const {id} = '2';
        const date = new Date().toLocaleString();

        console.log("📍 Coordinates: ", results[0].formatted_address);

        dispatch(incrementPoint(lat, lng));
        dispatch(historyCreate(id, formatted_address, lat, lng, date));

      };

    return (
        <Combobox className = 'AuComMap' onSelect={handleSelect} >
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className = 'cmb-input'
            placeholder="address"
            id = 'inputfind'
          />
          <ComboboxPopover>
            <ComboboxList>
                {status === 'OK' && 
                    data.map (({place_id, description}) => (
                    <ComboboxOption key={place_id} value = {description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
          
        </Combobox>
      );
  }
 
  export default InputFind;
