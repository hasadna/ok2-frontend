import { TakanonClause } from 'src/store/modules/takanon';
import { ToolId, ToolEvent } from 'src/store/modules/tool';

export class ToolsService {

  public getDescription(toolId: ToolId): Promise<string> {
    return new Promise((resolve, reject) => {
      const result = "כל חבר כנסת רשאי לבקש בתחילת ישיבת הכנסת המתקיימת בימים ב' וג' לנאום עד דקה על כל נושא.";
      setTimeout(() => resolve(result), 100);
    });
  }

  public getDidYouKnow(toolId: ToolId): Promise<string[]> {
    return Promise.resolve([
      "בזמן נאום בן דקה, חשפה ח\"כ שלי יחימוביץ' את דבר קיומו של האסיר X",
      "החתול שמיל, הוא משהו לא רגיל"
    ]);
  }

  public getEvents(toolId: ToolId): Promise<ToolEvent[]> {
    return Promise.resolve([
      {
        date: new Date(2018, 10, 31, 12, 30, 0),
        text: 'Unde nihil esse illum iure qui sed quia.'
      },
      {
        date: new Date(2019, 11, 31, 12, 30, 0),
        text: 'Rerum veritatis reiciendis debitis possimus et omnis possimus.'
      },
      {
        date: new Date(2020, 0, 1, 13, 30, 0),
        text: 'Non minima qui deserunt velit.'
      }
    ]);
  }

  public getTakanon(toolId: ToolId): Promise<TakanonClause[]> {
    return Promise.resolve([
      {
        number: [51, 1],
        text: `ישיבת הכנסת בימים ב' ו-ג', שאינה נפתחת
              בדיון על הצעה להביע אי-אמון בממשלה,
              תיפתח בנאומים של חברי הכנסת בנושאים
              לפי בחירתם, כאמור בסעיף 25(ג); יושב
              ראש הישיבה יקבע את סדר הנואמים; חבר
              הכנסת המבקש לנאום יצביע ממקומו
              באולם המליאה, וידבר, פעם אחת בלבד,
              מהמקום המיועד לכך באולם המליאה,
              במסגרת זמן שלא תעלה על דקה אחת.`
      },
      {
        number: [51, 2],
        text: `עם סיום הנאומים, רשאית הממשלה
              להשיב, באמצעות אחד או שניים מנציגיה,
              במסגרת זמן שלא תעלה על חמש דקות לכל
              אחד מהם`
      }
    ]);
  }
}

export const toolsService = new ToolsService();
