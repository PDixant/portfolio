CREATE or REPLACE function func4()

  returns VOID as $$

declare

c1 cursor for SELECT * FROM Transaction, Customer Order BY T_Date DESC;
c2 cursor for Account from Customer;

  Trans_num text;
  Trans_Vnum text;
  Trans_acc text;
  Trans_date text;
  Trans_amount numeric(10);
  Customer_acc text;

  begin



open c2;

loop
  open c1;
    fetch c2 into Customer_acc; 
    exit when not found;

  loop

      fetch c1 into Trans_num, Trans_Vnum, Trans_acc, Trans_date, Trans_amount;
      exit when not found;

      if (Trans_acc = Customer_acc) then
        raise notice 'Transaction No: %, Vender No: %, Transaction Account: %, Transaction Date: %, Transaction Amount: %', Trans_num, Trans_Vnum, Trans_acc, Trans_date, Trans_amount;
        exit when found;
      else
        raise notice 'No Transaction.';
      end if;
  end loop;

  close c1;
end loop;
close c2;
  end;
  $$ language plpgsql;

