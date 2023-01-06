import * as C from "./styled";
import { Item, Category } from "../../shared/global/types";
import { categories } from "../../shared/data/categories";
import { items } from "../../shared/data/items";
import { getCurrentMonth, filterListByMonth } from "../../shared/functions/helpers";
import { TableArea } from "../../shared/components/tablearea";
import { useEffect, useState } from "react";

export const ControleFinaceiro: React.FC = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Finaceiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações */}

        {/* Área de inserção */}

        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
};
